import React from 'react';
import styles from './ConfirmationModal.module.css';
import { AnimatePresence, motion } from 'framer-motion';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className={styles.container} 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className={styles.modalOverlay} 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        exit={{ scale: 0 }}
                    >
                        <div className={styles.modalContent}>
                            <p className={styles.title}>Excluir comentário</p>
                            <div className={styles.divText}>
                                <p>{message}</p>
                            </div>
                            <div className={styles.modalButtons}>
                                <button onClick={onClose} className={styles.cancelButton}>Cancelar</button>
                                <button onClick={onConfirm} className={styles.confirmButton}>
                                    Sim, excluir
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
