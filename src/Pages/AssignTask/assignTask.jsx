import { useState } from 'react';
import styles from './assignTask.module.css';
import { ImPlus } from 'react-icons/im';
import Card from '../../Components/Project_cards/pCard';
import { useDisclosure } from '@chakra-ui/react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const titlestyle={
position: 'absolute',
top: '50%',
left: '50%',
color: '#419c62',
fontSize: '20px',
fontWeight: '700',
}

export default function AssignTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [lead, setLead] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [projects, setProjects] = useState([]);

  const addProject = () => {
    const newProject = { title, lead, date, status };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    storedProjects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(storedProjects));
    onClose();
  };
  // const deleteProject = (index) => {
  //   const updatedProjects = [...projects];
  //   updatedProjects.splice(index, 1);
  //   setProjects(updatedProjects);
  // };

  return (
    <div className={styles.assignTask}>
      <div className={styles.createNew}>
        <button onClick={onOpen}>
          <ImPlus size={15} /> Create
        </button>
      </div>
      <div className={styles.Container}>
  {projects && projects.length > 0 ? (
    projects.map((project, index) => (
      <Card key={index} {...project} />
    ))
  ) : (
    <div style={titlestyle}>Assign a project to get started...</div>
  )}
</div>
      <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Add a Project details
          </Typography>
          <TextField
              sx={{ mb: 2, width: '38ch' }}
              required
              label="Title"
              placeholder='Title'
              variant="standard"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            <TextField
              sx={{ mb: 2, width: '38ch' }}
              required
              label="Project lead"
              placeholder='Rohan Mano'
              variant="standard"
              onChange={e => setLead(e.target.value)}
              value={lead}
            />
            <TextField
              sx={{ mb: 2, width: '38ch' }}
              label="Deadline"
              required
              type="date"
              variant="standard"
              onChange={e => setDate(e.target.value)}
              value={date}
            />
            <TextField
              sx={{ mb: 2, width: '38ch' }}
              label="Status"
              required
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Active'
              onChange={e => setStatus(e.target.value)}
              variant="standard"
              value={status}
            />
          <Button sx={{ width: '100px', float: 'right' }} onClick={addProject} variant="contained">
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

