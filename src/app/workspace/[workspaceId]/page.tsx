interface WorksspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorksspaceIdPage = ({ params }: WorksspaceIdPageProps) => {
  return <div>ID: {params.workspaceId}</div>;
};

export default WorksspaceIdPage;
