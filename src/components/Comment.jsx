/* eslint-disable react/prop-types */
import { 
  ThumbsUp,
  Trash
} from 'phosphor-react'

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment ({ content, onDeleteComment }) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/oGabrielArruda.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Arruda</strong>
              <time title="9 de fevereiro às 11:42" dateTime="2024-02-09 11:42:36">Cerca de 1h atrás</time>
            </div>

            <button 
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>


        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
