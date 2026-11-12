import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { TodosUseContext } from '../Context/Todocontext';

export default function Todo({ todo, onToggle }) {
  const { todos, setTodos } = useContext(TodosUseContext);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [editForm, setEditForm] = useState({
    title: todo.title,
    details: todo.details,
  });

  // حذف
  function handleDeleteConfirm() {
    setTodos(todos.filter((t) => t.id !== todo.id));
    setShowDeleteAlert(false);
  }

  // تعديل
  function handleUpdateConfirm() {
    setTodos(
      todos.map((t) =>
        t.id === todo.id
          ? { ...t, title: editForm.title, details: editForm.details }
          : t
      )
    );
    setShowUpdateDialog(false);
  }

  return (
    <>
      {/* ===== Dialog تأكيد الحذف ===== */}
      <Dialog
        onClose={() => setShowDeleteAlert(false)}   // ← فقط يُغلق
        open={showDeleteAlert}
        aria-labelledby="delete-title"
      >
        <DialogTitle id="delete-title">
          Are you sure to delete this mission?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Delete this mission</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteAlert(false)} autoFocus>
            Disagree
          </Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {/* ===== Dialog التعديل ===== */}
      <Dialog
        onClose={() => setShowUpdateDialog(false)}
        open={showUpdateDialog}
        aria-labelledby="update-title"
      >
        <DialogTitle id="update-title">Edit your mission</DialogTitle>
        <DialogContent>
          <DialogContentText>Update title and details</DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            label="mission title"
            fullWidth
            variant="standard"
            value={editForm.title}
            onChange={(e) =>
              setEditForm({ ...editForm, title: e.target.value })
            }
          />
          <TextField
            required
            margin="dense"
            label="my new update"
            fullWidth
            variant="standard"
            value={editForm.details}
            onChange={(e) =>
              setEditForm({ ...editForm, details: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowUpdateDialog(false)}>Close</Button>
          <Button autoFocus onClick={handleUpdateConfirm}>
            Accept
          </Button>
        </DialogActions>
      </Dialog>

      {/* ===== كارت المهمة ===== */}
      <Card sx={{ mt: 1, background: '#7e7e7cc7', minWidth: 275 }}>
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <IconButton
                  onClick={() => onToggle(todo.id)}
                  sx={{
                    color: todo.isconfirme ? '#fff' : '#8bc34a',
                    backgroundColor: todo.isconfirme ? 'green' : '#8bc34a',
                    m: '4px',
                    p: '5px',
                    border: '2px solid #8bc34a',
                  }}
                >
                  <CheckIcon />
                </IconButton>

                <IconButton
                  onClick={() => setShowUpdateDialog(true)}
                  sx={{
                    color: '#fff',
                    backgroundColor: 'aqua',
                    m: '4px',
                    p: '5px',
                    border: '2px solid #189abb',
                  }}
                >
                  <EditIcon />
                </IconButton>

                <IconButton
                  onClick={() => setShowDeleteAlert(true)}
                  sx={{
                    color: '#fff',
                    backgroundColor: 'red',
                    m: '4px',
                    p: '5px',
                    border: '2px solid #b31212',
                  }}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Grid>

              <Grid item xs={8}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: 'left',
                    fontSize: 17,
                    color: 'text.secondary',
                    textDecoration: todo.isconfirme
                      ? 'line-through 3px #fff'
                      : 'none',
                  }}
                >
                  {todo.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: 'left',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'text.secondary',
                  }}
                >
                  {todo.details}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}