import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { hoveredTagAtom, selectedTagsAtom } from '../lib/state'

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TagPill = styled.span`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  margin-right: 8px;
`

const Tags = ({ tags = [], controls = false }) => {
  const [_, setHoveredTag] = useAtom(hoveredTagAtom)
  const [selectedTags, setSelectedTags] = useAtom(selectedTagsAtom)

  return (
    <Content>
      {tags.map((tag, i) => (
        <TagPill
          key={`${tag}_${i}`}
          onMouseEnter={() => setHoveredTag(tag)}
          onMouseLeave={() => setHoveredTag(null)}
          onClick={() => {
            if (controls) {
              if (selectedTags.includes(tag)) {
                setSelectedTags(selectedTags.filter((t) => t !== tag))
              } else {
                setSelectedTags([...selectedTags, tag])
              }
            }
          }}
          style={{
            cursor: controls ? 'pointer' : 'default',
            backgroundColor:
              controls && selectedTags.includes(tag)
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(0, 0, 0, 0.1)',
            border:
              controls && selectedTags.includes(tag)
                ? '1px solid rgba(0, 0, 0, 1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          {tag}
        </TagPill>
      ))}
    </Content>
  )
}

export default Tags
