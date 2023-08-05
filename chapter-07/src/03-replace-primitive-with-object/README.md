primitive를 object로

## Motivation

초기 개발당시 간단한 데이터 아이템 numbers, strings... 와 같은

결국 나중에는 이 단순했던 아이템들이 단순하지 않게됨..
ex) telephone number를 예를 들어보자
- formatting을 해야함
- area code를 추출
등등등...

그래서 단순 printing 대신 data를 -> class형으로 변경

뉴비 프로그래머에겐 직관적이지 않은 행동이어도 
여러 개발자들이 이 리펙토링 기술이 가치있다고 생각을 함