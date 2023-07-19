function ItemIntroduce({ contents, className }) {
    return (
        <div className={className}>
            {contents.map((content, index) => (
                <span key={index}>{content}</span>
            ))}
        </div>
    );
}

export default ItemIntroduce;
