const React = require('react');

class Form extends React.Component {
    render() {
        // If there isn't a student (like for new page), use this
        const nullStudent = {
            nameFirst: "",
            nameLast: "",
            img: "",
            book: "",
            level: "",
            notes: ""
        }

        // If the student exists in props, set it to the student
        // Else, use nullStudent above
        const student = this.props.student !== null? this.props.student : nullStudent;

        // This is for the delete button on the Edit page
        const deletable = this.props.deletable? true : false;

        return (
            // Labels will show up for each section if deletable is true
            //   Like on the Edit page
            // Placeholder text will be used on the New page
            // Looks better and more descriptive this way
            <div>
                <form action={this.props.action} method={this.props.method}>
                    <div className="form-row">
                        <div className="form-group col">
                            {deletable? <label for="nameFirst">First Name</label> : ""}
                            <input type="text" className="form-control" name="nameFirst" defaultValue={student.nameFirst} placeholder="First Name" required={true} />
                        </div>
                        <div className="form-group col">
                            {deletable? <label for="nameLast">Last Name</label> : ""}
                            <input type="text" className="form-control" name="nameLast" defaultValue={student.nameLast} placeholder="Last Name" required={true} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            {deletable? <label for="img">Picture URL</label> : ""}
                            <input type="text" className="form-control" name="img" defaultValue={student.img} placeholder="Picture URL"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            {deletable? <label for="book">Book</label> : ""}
                            <input type="text" className="form-control" name="book" defaultValue={student.book} placeholder="Book"/>
                        </div>
                        <div className="form-group col">
                            {deletable? <label for="level">Level</label> : ""}
                            <input type="text" className="form-control" name="level" defaultValue={student.level} placeholder="Level"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            {deletable? <label for="notes">Notes</label> : ""}
                            <textarea rows="3" className="form-control" name="notes" defaultValue={student.notes} placeholder="Notes"/>
                        </div>
                    </div>
                    <input className="btn btn-outline-success btn-lg" type="submit" value="Submit"/>
                </form>

            
                <form action={`/students`} method="get">
                    <input className="btn btn-outline-secondary btn-lg" type="submit" value="Cancel"/>
                </form>

                {/* Shows the Delete button on the Edit page only */}
                {deletable?
                    <form action={`/students/${student._id}?_method=DELETE`} method="post">
                        <input className="btn btn-outline-danger btn-lg" type="submit" value="Delete"/>
                    </form>
                : ""}
            </div>
            
        );
    }
}

module.exports = Form;