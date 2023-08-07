import { CirclesWithBar } from 'react-loader-spinner';

function Loader() {
    return (
        <CirclesWithBar
            height="200"
            width="200"
            // color="#4fa94d"
            wrapperStyle={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                transform: 'translate(50%, -50%)',
              }}
            visible={true}
            outerCircleColor="#FFB627"
            innerCircleColor="#FF868D"
            barColor="#fbfbfbdb"
            ariaLabel="circles-with-bar-loading"
        />
    );
}

export default Loader;
