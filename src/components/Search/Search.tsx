import styles from './Search.module.css';
import { forwardRef } from 'react';
import cn from 'classnames';
import { SearchProps } from './Search.props.ts';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
    return (
        <div className={styles['input-wrapper']}>
            <input ref={ref} className={cn(styles['input'], className, {
                [styles['invalid']]: isValid
            })} {...props} />
            <img className={styles['loop']} src="/loop.svg" alt="Logo"/>
        </div>
    );
});

export default Search;

