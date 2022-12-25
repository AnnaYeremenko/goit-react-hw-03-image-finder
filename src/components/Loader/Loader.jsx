import { Hearts } from 'react-loader-spinner';
import { LoaderGallery } from './Loader.styled';

export const Loader = () => (
    <LoaderGallery>
        <Hearts 
  height="300"
  width="300"
  color="pink"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </LoaderGallery>
);