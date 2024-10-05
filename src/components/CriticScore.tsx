import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  // Set color scheme based on game metacritic score
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
