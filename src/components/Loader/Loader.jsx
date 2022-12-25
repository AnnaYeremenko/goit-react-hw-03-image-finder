import { Vortex } from 'react-loader-spinner';
import { LoaderGallery } from './Loader.styled';

export const Loader = () => (
    <LoaderGallery>
        <Vortex
  visible={true}
  height="300"
  width="300"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
    </LoaderGallery>
);