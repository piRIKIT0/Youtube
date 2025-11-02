import { Container } from "../header/styles";
import { ChannelImage, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent() {
  return (
    <Container>
      <ImageBanner src="https://s2-techtudo.glbimg.com/ZK6Md5XXCr-02tOvNWBTmUD9LZY=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/s/a/dBdhsxSrA2oVJ2yzGlYA/the-last-of-us-part-2-remastered-playstation-5-ps5-ellie.jpg" />
      <TitleContainer>
        <ChannelImage>
          EG
        </ChannelImage>
        <TextContainer>
          <Title>The Last of Us Part II Remastered - Announce Trailer | PS5 Games</Title>
          <TextCard>PlayStation</TextCard>
          <TextCard>1,7 M de visualizações há 3 semanas</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoComponent;