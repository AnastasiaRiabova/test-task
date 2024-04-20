import { useGetTrailersRequestQuery } from '../redux/apiTrailers';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';
import { Loading } from '../components/Loading';
import { CamperItems } from '../components/CamperItems';
import { Button } from '../components/Button';
import { Error } from '../components/Error';

export const Favorites = () => {
  const {
    data: campers,
    isLoading: campersLoading,
    error: campersError,
  } = useGetTrailersRequestQuery();
  const navigate = useNavigate();

  const [value] = useLocalStorage({
    key: 'favorites',
    defaultValue: [],
  });

  const favoriteCampers = campers?.filter(c => value.includes(c._id)) || [];

  if (campersError) {
    return <Error />;
  }

  return (
    <section className={'py-[90px]'}>
      {campersLoading && <Loading />}
      <CamperItems
        emptyComponent={
          !campersLoading && (
            <div className="flex items-center justify-center w-full h-[80vh] flex-col ">
              <p className="font-bold pb-4">
                No campers in favorites please add at least one
              </p>
              <Button onClick={() => navigate('/catalog')}>
                Explore Camper Catalog
              </Button>
            </div>
          )
        }
        campers={favoriteCampers}
      />
    </section>
  );
};
