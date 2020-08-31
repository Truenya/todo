import React from "react";
const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];
const ItemStatusFilter=({filter,onFilterChange = () => {}})=> {

    const buttons = filterButtons.map(({name, label}) => {

        const isActive = filter === name;
        const clazz = isActive ? 'btn-info' : 'btn-outline';
        return (
            <button type="button"
                    className={'btn ' + clazz}
                    key={name}
                    onClick={() => onFilterChange(name)}>
                {label}
            </button>
        );
    });
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default ItemStatusFilter;