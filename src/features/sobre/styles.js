import aboutImage from '../../assets/img/about.jpeg';

export const sobreStyles = {
    sobreContainer: {
        position: 'relative',
        height: '100vh',
    },
    sobreImg: {
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
    },
    missao: {
        width: '25%',
        padding: '30px',
        position: 'absolute',
        textAlign: 'center',
        top: 30,
        right: 0,
    },
    historia: {
        width: '25%',
        padding: '30px',
        position: 'absolute',
        textAlign: 'center',
        bottom: 20,
        left: 0,
    }
}