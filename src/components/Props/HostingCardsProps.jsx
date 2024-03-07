import { computerImage, tick } from '../../assets/images';
import Button from './Button';

const HostingCard = (props) => {
    const { className, index, tag, tagSrc, label, title, article, highlight, lastCard, lastCardComment, arrowSrc, rate, remark, starIcon } = props;

    return (
        <div className={`hosting-card ${className}`}>
            {(tag || tagSrc) &&
                <div className='tag-cont'>
                    <img src={tagSrc} alt="icon" />
                    <p>{tag}</p>
                </div>
            }
            <div className='index-container'>{index}</div>
            <span className='card image-cont'>
                <img src={computerImage} alt="computer image" className='desktop' />
                <p>{label}</p>
            </span>
            <span className='card-content'>
                <span className='article-1'><b>{title}</b>{article}</span>
                <b className='highlight-heading'>Main highlights</b>
                {lastCard &&
                    <div className='last-card-container Last-card-highlight'>
                        {lastCard.map((item, index) => (
                            <span className="last-card-content" key={index}>
                                <span>{item.contentValue} </span>
                                <p>{item.content}</p>
                            </span>
                        ))}
                    </div>}
                <p className={lastCard ? '' : 'highlight'}>{highlight}</p>
                {lastCardComment &&
                    <div className='last-card-container'>
                        {lastCardComment.map((comments, index) => (
                            <span className="last-card-content" key={index}>
                                <img src={tick} alt="tick" />
                                <p>{comments}</p>
                            </span>
                        ))}
                    </div>
                }
                <div className='show-more'>
                    <p>Show more</p>
                    {arrowSrc && <img src={arrowSrc} alt="arrow" />}
                </div>
            </span>
            <span className='rate-button-container card'>
                <div className='rating-container'>
                    <h1>{rate}</h1>
                    <p>{remark}</p>
                    <img src={starIcon} alt="star icon" />
                </div>
                <Button
                    label="View"
                />
            </span>
        </div>
    );
};

export default HostingCard;
