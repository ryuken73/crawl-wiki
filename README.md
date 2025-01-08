## `contents crawl` - `DB insert` - `backlinks crawl` - `service`

1. 사전준비로 shell script 환경변수 setting 필요 : Database관련

2. test_browser.js에서 CRAWL_START_URLS 추가(crawl할 link목록이 있는 페이지)

3. run_crawl.sh 

- playwright를 사용해서 CRAWL_START_URLS 로드

- 해당 페이지 내의 링크를 순회하면서 방문 (방문할 링크를 표준정규식으로 제한할 수 있음)

- 방문한 링크에서 인물정보 텍스트를 읽어와 DB insert하기 위한 json으로 저장하고 이미지도 저장(1개 링크 당 json 2개(C, I), image(webp) 1개 저장)

- json파일과 이미지는 crwal_config.json에 기술된 TEMP_PATH 아래 날짜 폴더에 임시로 저장


4. run_addDB.sh

- 파일내용에서 SRC_FOLDER를 위 날짜로 변경필요(위 json, image가 있는 폴더)

- 실행하면 해당 폴더의 json파일들을 읽어 contents, images table에 등록

- 정상 처리한 json은 동일 폴더 내 done 폴더로 move

- image는 addDatabase.js내 BASE_IMAGE_FOLDER아래 category 폴더로 move

- image 중 잘못된 파일은 invalid_webp 폴더로 move (invalid webp, jpg)

5. run_gemini.sh [생략가능]

- contents 테이블의 인물정보 텍스트를 google gemini로 json 변환

- 변환한 데이터를 다시 contents table에 입력

- additional_info_raw : 원본 텍스트
- additional_info : JSON 텍스트

6. run_crawl_backlink.sh

- backlink_count table에 없는 contents (한번도 backlink 수집하지 않은)를 DB에서 읽어와 back link를 crawling함

- 결과를 아래와 같이 DB에 반영록

  backlinks table에 수집된 backlink 등록(중복X)

  contents_backlins table에 conetnt-backlink mapping 정보 등록

  backlink_crawl_history table에 content id와 crawl 날짜, backlink count를 등록

  DB Trigger에 의해 backlink_count table에 backlink_crawl_history의 new row를 insert/update 하게 됨

7. run_server.sh

- fastify를 활용한 WEB서버 : network graph를 만들기 위한 api 제공