import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import PropTypes from 'prop-types';

import './tarefas.css';

export default function Tarefas( { tarefas, handleEdit, handleDelete } ) {
  return(
    <ul className="tarefas">
        {
          tarefas.map( (tarefa, index) => {
            return <li key={tarefa}>{tarefa}
              <div>
                <FaEdit className='edit' onClick={e => handleEdit(e, index)} />
                <FaWindowClose className='wClose' onClick={e => handleDelete(e, index)} />
              </div>
            </li>
          })
        }
      </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
