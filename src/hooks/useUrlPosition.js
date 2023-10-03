import { useSearchParams } from 'react-router-dom';

const useUrlPosition = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return [Number(lat), Number(lng)];
};

export { useUrlPosition };
