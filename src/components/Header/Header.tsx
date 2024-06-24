import styles from './Header.module.css'

import ipdecLogo from '../../assets/Ipdec-logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={ipdecLogo} alt='Logotipo do Ipdec' />
        </header>
    );    
}