import { Box, Button, Grid, GridItem, Image, Skeleton, SkeletonText, Text, useColorMode } from "@chakra-ui/react";
import { useEffect } from 'react';
import { fetchVideosByQuery } from "@/lib/features/videos/searchedVideoSlice";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { VideoSchema } from "./constants/constants";
const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useAppDispatch();

  const videoDatas  = useAppSelector((state: RootState)=> state.searchedVideos.videos)
  const videoStatus = useAppSelector((state: RootState)=> state.searchedVideos.status)

  useEffect(() => {
    dispatch(fetchVideosByQuery('all'));  
  }, [dispatch]);

  useEffect(() => {
    console.log("Videos in state:", videoDatas);  
  }, [videoDatas]);

  if (videoStatus === 'loading') {
    return (
      <div className="w-[97%] h-[calc(100vh-100px)] sm:ml-[3%] overflow-auto">
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {Array.from({ length: 10 }).map((_, index) => (
            <GridItem key={index} w="100%" h="auto">
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">
                <Skeleton height="200px" />
                <Box p="6">
                  <SkeletonText noOfLines={2} spacing="4" />
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </div>
    );
  }

  return (
    <div className="w-[97%] h-[calc(100vh-100px)] sm:ml-[3%] overflow-auto">
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {videoDatas.map((video:VideoSchema) => (
          <GridItem
            key={video.id.videoId}
            w="100%"
            h="auto"
          >
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">
              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width="100%"
                height="auto"
              />

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
