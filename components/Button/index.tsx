import styles from './index.module.scss';

interface IButton {
    type: 'link' | 'button',
    href?: string,
    desc: string,
}

const Button = ({ type, href, desc }) => {
    const button = type === 'link' ? <a href={href}>{desc}</a> : <button type={type}>{desc}</button>
    return <div>
        {button}
    </div>
}

export default Button;