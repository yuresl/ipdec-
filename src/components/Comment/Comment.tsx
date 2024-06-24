import {Trash, ThumbsUp} from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

interface TextWithLineBreaksProps {
    text: string;
}

export function Comment({ content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const TextWithLineBreaks: React.FC<TextWithLineBreaksProps> = ({ text }) => {
        return (
            <span>
                {text.split('').map((char, index) => (
                    <React.Fragment key={index}>
                        {char}
                        <wbr />
                    </React.Fragment>
                ))}
            </span>
        )
    }

    function handleLikeComment() {
        setLikeCount((estado) => {
            return estado + 1;
        });
    }

    function handleDeleteComment() {
        setIsModalOpen(true); 
    }

    function confirmDeleteComment() {
        onDeleteComment(content);
        setIsModalOpen(false);
    }
    
    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/yuresl.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yure Luniere</strong>
                            <time title="19 de Junho de às 09:51h" dateTime="2024-06-19 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        <TextWithLineBreaks text={content} />
                    </p>      
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmDeleteComment}
                message="Você tem certeza que gostaria de excluir este comentário?" 
            />
        </div>
    )
}