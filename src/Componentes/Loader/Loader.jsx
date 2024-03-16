import css from './Loader.module.css';
// npm install react-loader-spinner --save
import { Hourglass } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <Hourglass
        visible={true}
        height="60"
        width="40"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass={css.loader}
        colors={['#306cce', '#72a1ed']}
      />
    </>
  );
}