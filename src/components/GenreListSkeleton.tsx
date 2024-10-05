import { HStack, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <Stack>
      <HStack marginY={2}>
        <SkeletonCircle borderRadius={4} size="32px" />
        <SkeletonText noOfLines={1} width="80%" />
      </HStack>
    </Stack>
  );
};

export default GenreListSkeleton;
