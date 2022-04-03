import { User } from 'service/users.service';
import styles from './UserCard.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface UserCardProps {
  user: User;
}

const priorities: Record<string, number> = {
  google: 5,
  linkedin: 4,
  facebook: 3,
  twitter: 2,
  office365: 1
};

const UserCard = ({ user }: UserCardProps) => {
  const photos = user.photos.sort((a, b) => priorities[b.source] - priorities[a.source]);
  const [imageUrl, setImageUrl] = useState(photos[0].url);

  return (
    <div className={styles.card_container}>
      <div
        className={clsx(styles.card_check, {
          [styles.card_check_inactive]: user.status === 'inactive',
          [styles.card_check_active]: user.status === 'active'
        })}
      />
      <div className={styles.card_image}>
        <Image
          src={imageUrl}
          alt={photos[0].source}
          layout="fill"
          onError={() => {
            setImageUrl(photos[1].url);
          }}
        />
      </div>
      <div className={styles.card_text}>{user.firstName}</div>
      <div
        className={clsx(styles.card_signal, {
          [styles.card_signal_ok]: user.signal <= 2,
          [styles.card_signal_good]: user.signal === 3,
          [styles.card_signal_solid]: user.signal > 3
        })}
      >
        {user.signal <= 2 ? 'Ok' : user.signal === 3 ? 'Solid' : 'Good'}
      </div>
    </div>
  );
};

export default UserCard;
