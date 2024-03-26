import React from 'react';
import {
  BrainCircuit,
  MessagesSquare,
  MessageCircleQuestion, 
  TriangleAlert
} from 'lucide-react';

interface IconProps {
  type: string;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  let IconComponent;
  let fillColor = '#000'; // Default mild color for the fallback

  switch (type.toLowerCase()) {
    case 'questionnaire':
      IconComponent = MessageCircleQuestion;
      fillColor = '#ffcccc'; // Mild red
      break;
    case 'mindmapper':
      IconComponent = BrainCircuit;
      fillColor = '#ccccff'; // Mild blue
      break;
    case 'chat':
      IconComponent = MessagesSquare;
      fillColor = '#ccffcc'; // Mild green
      break;
    default:
      IconComponent = TriangleAlert;
      fillColor = '#ffffcc'; // Mild yellow for default/fallback
  }

  // Render the Lucide icon with the specified fill color and a size
  return <IconComponent color={fillColor} size={24} style={{ margin: '12px', float: 'right' }}/>;
};

export default Icon;
