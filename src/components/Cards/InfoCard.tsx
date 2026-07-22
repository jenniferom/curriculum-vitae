import { Card } from 'antd';
import { JSX } from 'react/jsx-runtime';
import IconLabel from '../IconLabel/IconLabel';

interface InfoCardProps {
  id: string;
  title?: string;
  description?: string;
  icon?: JSX.Element;
  children?: React.ReactElement;
}

export default function InfoCard({
  id,
  title,
  description,
  icon,
  children,
}: InfoCardProps) {
  return (
    <Card
      hoverable
      id={id}
      title={<IconLabel title={title} icon={icon} subtitle={description} />}
    >
      {children}
    </Card>
  );
}
