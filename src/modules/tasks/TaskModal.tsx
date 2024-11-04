/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components';

const TaskModal = ({ user, show, close }) => {
  const completedTask = (user.tasks|| []).filter(task => task.completed)
  const pendingTask = (user.tasks|| []).filter(task => !task.completed)

  return (
    <ModalWrapper className={`${show ? "show-modal": ""}`}>
      <div className="modal">
      <div className="close-btn-container">
        <button onClick={() => close()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#03131e" d="m12 13.4-4.9 4.9q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.3-.7 0-.4.3-.7l4.9-4.9-4.9-4.9q-.3-.3-.3-.7 0-.4.3-.7.3-.3.7-.3.4 0 .7.3l4.9 4.9 4.9-4.9q.3-.3.7-.3.4 0 .7.3.3.3.3.7 0 .4-.3.7L13.4 12l4.9 4.9q.3.3.3.7 0 .4-.3.7-.3.3-.7.3-.4 0-.7-.3Z"/>
            </svg>
          </button>
        </div>
        <h3>{user?.name}&apos;s tasks</h3>
        <article>
          <h4 style={{color: "#2062a0"}}>Completed Task</h4>
          { completedTask.length && (
              <ul>
                {
                  completedTask.map(task => {
                    return <p key={task._id}>{task.name}</p>
                  })
                }
              </ul>
            )
          }
        </article>
        <article>
          <h4 style={{color: "#ca9033"}}>Pending Task</h4>
          <ul>
            { pendingTask.length && (
                pendingTask.map(task => {
                  return <p key={task._id}>{task.name}</p>
                })
              )
            }
          </ul>
        </article>
      </div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.section`
  transform: scale(0);
  -moz-transform: scale(0);
  -webkit-transform: scale(0);
  transition: var(--transition-val);
  -moz-transition: var(--transition-val);
  -webkit-transition: var(--transition-val);
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &.show-modal {
    transform: scale(1);
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    visibility: visible;
    opacity: 1;
    z-index: 10;
  }

  .modal {
    max-width: 600px;
    width: 100%;
    background-color: var(--off-white);
    padding: 2rem;
    border-radius: 8px;

    article {
      padding: 1.5rem 0;
      font-size: calc(1.8rem * var(--base-size));
      line-height: 150%;
      color: var(--secondary-dark);

      ul {
        display: grid;
        gap: 0.625rem;
      }
    }

    h3, h4 {
      font-size: calc(2.5rem * var(--base-size));
      line-height: 120%;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: calc(2rem * var(--base-size));
    }

    .close-btn-container {
      text-align: right;

      button {
        background-color: transparent;
        border: none;
        padding: 0;
      }
    }
  }
`;

export default TaskModal