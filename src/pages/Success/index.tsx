import {
  ContainerContentSuccess,
  ContentDow,
  ContentSuccess,
  SectionSuccess,
  WrapperSuccess,
} from './style'

export default function Success() {
  return (
    <SectionSuccess>
      <WrapperSuccess>
        <ContainerContentSuccess>
          <ContentSuccess>
            <h1>Success</h1>
            <ContentDow></ContentDow>
          </ContentSuccess>
        </ContainerContentSuccess>
      </WrapperSuccess>
    </SectionSuccess>
  )
}
