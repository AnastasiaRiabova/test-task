import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <section className={'homeContainer bg-center bg-cover h-full w-full'}>
      <div>
        <div className={'flex flex-col gap-32 items-start p-8'}>
          <div className={'font-bold text-red text-7xl pt-48 leading-normal'}>
            <h1>
              {' '}
              Unlock Your Wanderlust,
              <br /> Rent the Perfect Journey!
            </h1>
          </div>
          <Button onClick={() => navigate('/catalog')}>
            Discover the Great Outdoors with Our Camping Rentals!
          </Button>
        </div>
      </div>
    </section>
  );
};
