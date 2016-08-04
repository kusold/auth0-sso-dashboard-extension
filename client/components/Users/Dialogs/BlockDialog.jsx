import React, { Component, PropTypes } from 'react';
import { Error, Confirm } from '../../Dashboard';

export default class BlockDialog extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    requesting: PropTypes.bool.isRequired,
    userName: PropTypes.string,
    error: PropTypes.string
  }

  render() {
    const { userName, error, requesting, loading, onCancel, onConfirm } = this.props;
    return (
      <Confirm title="Block User?" show={requesting} loading={loading} onCancel={onCancel} onConfirm={onConfirm}>
        <Error message={error} />
        <p>
          Do you really want to block <strong>{userName}</strong>?
          After doing so the user will not be able to sign in anymore.
        </p>
      </Confirm>
    );
  }
}
