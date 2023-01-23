import React, {useState} from 'react';

export interface PostMutation {
    author: string,
    message: string,
}

interface SubmissionFormProps {
    onSubmit: (e: React.FormEvent, post: PostMutation) => void
}

const SubmissionForm: React.FC<SubmissionFormProps> = ({onSubmit}) => {
    const [post, setPost] = useState<PostMutation>({
        author: '',
        message: '',
    });

    const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost(prev => ({...prev, [name]: value}))
    };

    return (
        <form onSubmit={e => onSubmit(e, post)} className="row g-2 m-1" id="form">
            <div className="col-auto">
                <input
                    type="text"
                    className="form-control"
                    name="author"
                    placeholder="Введите ваше имя"
                    value={post.author}
                    onChange={onTextFieldChange}
                />
            </div>
            <div className="col-auto">
                <input
                    type="text"
                    className="form-control"
                    name="message"
                    placeholder="Введите ваше сообщение"
                    value={post.message}
                    onChange={onTextFieldChange}
                />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Отправить</button>
            </div>
        </form>
    );
};

export default SubmissionForm;