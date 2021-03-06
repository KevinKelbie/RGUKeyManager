import React from 'react';

// Material UI Components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Graphics Components
import Button from './HeaderButton';

class AlertDialog extends React.Component {
  state = {
    open: false,
    email: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant={this.props.variant} color={this.props.color} text={this.props.text} icon={this.props.icon} onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.desc}
            </DialogContentText>
            {this.props.content}
          </DialogContent>
          <DialogActions>
            <Button text={this.props.no} onClick={this.handleClose} color="primary" />
            <Button text={this.props.yes} onClick={this.props.handleClickOpen} color="primary" autoFocus />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
