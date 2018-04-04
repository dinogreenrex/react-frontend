export const TableToolbar = (props) => (
	<Button.Group>

		<Button icon="plus-circle">Insert</Button>

		<Button icon="edit" disabled={buttonDisabled} onClick={this.editRecord(cRecord)}>Edit</Button>


		<Popconfirm title="Are you sure delete this task?" onConfirm={this.deleteRecord(cRecord)} onCancel={eventCancelEdit} okText="Yes" cancelText="No">
			<Button icon="delete" disabled={buttonDisabled} >Delete</Button>
		</Popconfirm>
	</Button.Group>
)