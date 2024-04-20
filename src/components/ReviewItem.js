import { Icon } from './Icon';
import { star, starGrey } from '../assets/icons';

export const ReviewItem = ({ name, rating, comment }) => {
  const renderRaring = rating => {
    return [...Array(5)].map((u, ind) => {
      if (ind < rating) {
        return <Icon key={ind} icon={star} width={'15px'} height={'15px'} />;
      }
      return <Icon key={ind} icon={starGrey} width={'15px'} height={'15px'} />;
    });
  };
  return (
    <div>
      <div className={'flex gap-2 mb-3'}>
        <div
          className={
            'bg-grey-lightGrey rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center font-bold text-lg text-red'
          }
        >
          {name.slice(0, 1)}
        </div>
        <div>
          <div>{name}</div>
          <div className={'flex items-center gap-0.5'}>
            {renderRaring(rating)}
          </div>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};
