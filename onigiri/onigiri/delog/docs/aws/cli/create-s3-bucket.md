---
slug: /aws/cli/s3/create-bucket
# id: create-s3-bucket
title: AWS - CLI 로 S3 Bucket 만들기
tags: [de.log, aws, aws cli, s3, bucket, create s3 bucket]
# sidebar_position: 1
---

<!--title -->
# AWS - CLI 로 S3 Bucket 만들기
<!--//title -->

## Command
```shell
$ aws s3api create-bucket \
    --bucket ${BUCKET_NAME} \ # bucket name
    --region ${REGION} \  # region name
    --create-bucket-configuration LocationConstraint=${REGION} \  # region name
    --profile ${PROFILE} # profile name
```

## Examples
```shell
$ aws s3api create-bucket \
    --bucket example-temp-bucket \
    --region ap-northeast-2 \
    --create-bucket-configuration LocationConstraint=ap-northeast-2 \
    --profile sample-dev
```

#### Public Access Block
- S3 CLI 로 Bucket 을 만들게 되면, 기본적으로 `Public Access Block` 은 활성화 되어있다.(Public access 불가)

## Shell Script
```shell
#!/bin/sh

echo "===== CREATE NEW BUCKET ====="

BUCKET_NAME="example-temp-bucket"
REGION="ap-northeast-2"
PROFILE="sample-dev"

# craate s3 bucket
aws s3api create-bucket \
  --bucket ${BUCKET_NAME} \
  --region ${REGION} \
  --create-bucket-configuration LocationConstraint=${REGION} \
  --profile ${PROFILE}

echo "===== END CREAT BUCKET:$BUCKET_NAME ====="
```


--- 
- Refs:
  + [AWS CLI Refs: caete-bucket](https://docs.aws.amazon.com/cli/latest/reference/s3api/create-bucket.html)


