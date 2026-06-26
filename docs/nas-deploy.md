# NAS 部署说明

目标目录：

```text
/volume3/docker/jdpc
```

推荐部署结构：

```text
/volume3/docker/jdpc/
  docker-compose.yml
  nginx.conf
  html/
    index.html
    assets/
    legacy-pages/
```

部署流程：

```bash
npm test
ssh <user>@<host> -p <port> "mkdir -p /volume3/docker/jdpc/html"
scp -P <port> deploy/nas/docker-compose.yml deploy/nas/nginx.conf <user>@<host>:/volume3/docker/jdpc/
scp -P <port> -r dist/* <user>@<host>:/volume3/docker/jdpc/html/
ssh <user>@<host> -p <port> "cd /volume3/docker/jdpc && docker compose up -d"
```

默认映射端口为 `8088`，部署后访问：

```text
http://<NAS地址>:8088
```
