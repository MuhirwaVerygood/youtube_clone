import { Box, Button, Grid, GridItem, Image, Stack, useColorMode, Text, IconButton, HStack } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { fetchAllData } from "@/utils/fetchData";
import { VideoSchema } from './constants/constants';
import { FaPlay, FaPause, FaShareAlt, FaDownload, FaBell } from 'react-icons/fa'; // Icons for actions

const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [videoDatas, setVideoDatas] = useState<VideoSchema[]>([]);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);  // For tracking which video is hovered
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);  // Track which video is currently playing

  useEffect(() => {
    async function fetch() {
      try {
        const datas = await fetchAllData();
        setVideoDatas(datas);  // Assuming datas is an array of VideoSchema
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetch();
  }, []);

  // Handle play/pause toggle
  const handlePlayPause = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);  // Toggle play/pause state
  };

  // Handle share (dummy function for now)
  const handleShare = (videoId: string) => {
    alert(`Share video: ${videoId}`);
  };

  const handleDownload = (videoId: string) => {
    alert(`Download video: ${videoId}`);
  };

  const handleSubscribe = (channelTitle: string) => {
    alert(`Subscribed to: ${channelTitle}`);
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] sm:ml-[3%] overflow-auto">
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {videoDatas.map((video) => (
          <GridItem
            key={video.id.videoId}
            w="100%"
            h="auto"
            onMouseEnter={() => setHoveredVideo(video.id.videoId)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width="100%"
                height="auto"
                display={hoveredVideo === video.id.videoId ? 'none' : 'block'}  // Hide thumbnail when video is playing
              />

              {hoveredVideo === video.id.videoId && (
                <iframe
                  width="100%"
                  height="auto"
                  src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=${playingVideo === video.id.videoId ? 1 : 0}`}  // Autoplay based on state
                  title={video.snippet.title}
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                  allowFullScreen
                />
              )}

              <Box p="6">
                <Text fontWeight="bold" fontSize="lg" isTruncated>
                  {video.snippet.title}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {video.snippet.channelTitle}
                </Text>

               
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div>
  );
};

export default Main;
