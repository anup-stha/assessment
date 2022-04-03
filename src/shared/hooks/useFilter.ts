import { User } from 'service/users.service';
import { FilterValues } from 'components/Filter/Filter';

interface useFilterProps {
  userList: User[] | null;
  filter: FilterValues;
}

export const useFilter = ({ userList, filter }: useFilterProps) => {
  if (userList === null) {
    return { filteredUser: userList };
  }

  const signalHash: { [key: number]: string } = {
    1: 'ok',
    2: 'ok',
    3: 'solid',
    4: 'good',
    5: 'good'
  };

  const filteredUser = userList?.filter((user) => {
    const regex = new RegExp(`${filter.name.toLowerCase()}`);

    const status = filter.status ? user.status === filter.status : true;

    console.log(filter.signal);

    const signal =
      filter.signal && filter.signal.length !== 0 && Array.isArray(filter.signal)
        ? filter.signal.some((signal) => signalHash[user.signal] === signal)
        : true;

    const source = filter.source ? user.photos.some((photo) => photo.source === filter.source) : true;

    return regex.test(user.firstName.toLowerCase()) && status && signal && source;
  });

  return { filteredUser };
};
