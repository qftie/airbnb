// ?offset 偏移多少条数据 ?page往后多少页 ?size取多少条数据

import hyRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return hyRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
