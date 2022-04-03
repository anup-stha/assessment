import Filter from 'components/Filter';
import UserCard from 'components/User/UserCard';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { getUsersList, User } from 'service/users.service';
import styles from './UserPage.module.scss';
import { FilterValues } from 'components/Filter/Filter';
import { useFilter } from 'shared/hooks/useFilter';

const UserPage = () => {
  const [filter, setFilter] = useState<FilterValues>({ name: '', status: '', signal: '' });
  const [userList, setUserList] = useState<User[] | null>(null);
  const [filteredValue, setFilteredValue] = useState<User[] | null>(null);

  const { filteredUser } = useFilter({ userList, filter });

  const filterJSONString = JSON.stringify(filter);

  useEffect(() => {
    const getUsers = async () => {
      const response = await getUsersList();
      setUserList(response);
      setFilteredValue(response);
    };

    getUsers();
  }, []);

  useEffect(() => {
    filteredUser && setFilteredValue(filteredUser);
  }, [filterJSONString]);

  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        <div className={styles.page_container_filter}>
          <Filter setFilter={setFilter} />
        </div>
        <div className={styles.page_container_user}>
          {filteredValue && filteredValue.map((user) => <UserCard key={uuidv4()} user={user} />)}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
