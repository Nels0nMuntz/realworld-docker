interface Props {
  id: string;
  heading: string;
}

export const Page: React.FC<Props> = ({ id, heading }) => {
  return (
    <div id={`${id}-tabpanel`} className='h-full rounded-md bg-off-white p-6' role='tabpanel'>
      <h1 className='text-2xl text-grays-dark'>{heading}</h1>
    </div>
  );
};
