import './socialLink.css';

const SocialLink = ({image, link, alt}) => {
  return (
      <a className={'socialLink'} rel="noreferrer" target={'_blank'} href={link}>
        <img className={'socialLink__image'} src={image} alt={alt} />
      </a>
  )
}

export default SocialLink;