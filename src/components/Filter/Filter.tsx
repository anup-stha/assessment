import styles from './Filter.module.scss';
import { useForm } from 'react-hook-form';
import { Dispatch, SetStateAction, useEffect } from 'react';

export interface FilterValues {
  name: string;
  status: string;
  signal: string[];
  source?: string;
}

interface FilterProps {
  setFilter: Dispatch<SetStateAction<FilterValues>>;
}

const Filter = ({ setFilter }: FilterProps) => {
  const { register, watch, handleSubmit } = useForm<FilterValues>();

  const onSubmit = (data: FilterValues) => setFilter(data);

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)());
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.filter_background}>
      <h1 className={styles.filter_heading}>Filter</h1>
      <input className={styles.filter_input} placeholder="Search" {...register('name')} />

      <div className={styles.filter_status_signal_container}>
        <div className={styles.filter_status_container}>
          <h1 className={styles.filter_title}>By Status</h1>

          <div className={styles.filter_radio_container}>
            <input className={styles.filter_radio} type="radio" id="active" {...register('status')} value="active" />
            <label className={styles.filter_radio_label} htmlFor="active">
              Active
            </label>
          </div>

          <div className={styles.filter_radio_container}>
            <input
              className={styles.filter_radio}
              type="radio"
              id="inactive"
              {...register('status')}
              value="inactive"
            />
            <label className={styles.filter_radio_label} htmlFor="inactive">
              Inactive
            </label>
          </div>
        </div>
        <div className={styles.filter_status_container}>
          <h1 className={styles.filter_title}>By Signal</h1>
          <div className={styles.filter_radio_container}>
            <input className={styles.filter_radio} type="checkbox" id="solid" {...register('signal')} value="solid" />
            <label className={styles.filter_radio_label} htmlFor="solid">
              Solid
            </label>
          </div>
          <div className={styles.filter_radio_container}>
            <input className={styles.filter_radio} type="checkbox" id="good" {...register('signal')} value="good" />
            <label className={styles.filter_radio_label} htmlFor="good">
              Good
            </label>
          </div>
          <div className={styles.filter_radio_container}>
            <input className={styles.filter_radio} type="checkbox" id="ok" {...register('signal')} value="ok" />
            <label className={styles.filter_radio_label} htmlFor="ok">
              Ok
            </label>
          </div>
        </div>
      </div>

      <div>
        <h1 className={styles.filter_title}>By Source</h1>
        <select placeholder="By Source" defaultValue="" className={styles.filter_input} {...register('source')}>
          <option value="" disabled hidden>
            Select Source
          </option>

          <option value="google">Google</option>
          <option value="linkedin">LinkedIn</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="office365">Office365</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
