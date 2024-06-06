---
# slug: /aws/cli/s3/create-bucket
id: create-s3-bucket
title: CLI 로 S3 Bucket 만들기
tags: [devian-lab, wiki, aws, aws cli, s3, bucket, create s3 bucket]
# sidebar_position: 1
---

<!--title -->
# CLI 로 S3 Bucket 만들기
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

### Options

| No | option | desc | note |
| --- | --- | --- | --- |
| 1 | `--bucket` | Bucket 의 이름| - |
| 2 | `--region` | Region 의 이름| _aws config 파일_ 에 region 이 지정되어 있다면 생략 |
| 3 | `--create-bucket-configuration LocationConstraint=리전명` | Bucket 을 생성할 Region 의 이름| `--region` 이 `us-east-1` 이외의 리전이라면 반드시 지정한다. |
| 4 | `--profile` | profile 의 이름| 사용하려는 _aws credentials 파일_ 의 profile 명을 지정한다. |

- aws config, aws credentials 파일: aws configure 으로 설정한 인증 정보 파일
  + Linux, MacOS: `~/.aws/`
  + Windows: `C:\Users\USERNAME\.aws\`

#### LocationConstraint
- Bucket 의 기본 생성 Region: _us-east-1_
  + `LocationConstraint` 을 지정하지 않으면 Bucket 의 Region 은 기본적으로 _us-east-1_ 다.

- Bucket 의 Region 을 `us-east-1` 가 아닌 Region (`ap-northeast-2`) 으로 한다면, `--create-bucket-configuration LocationConstraint=리전이름` 을  반드시 지정해주어야 한다.
  + **llegalLocationConstraintException** 에러
    - LocationConstraint 을 지정하지 않고,`--region` 에서 지정한 Region 명이 `us-east-1` 가 아닌 경우
    - LocationConstraint 에서 지정한 Region 명과 `--region` 에서 지정한 Region 명이 다를 경우

- [공식 문서](https://docs.aws.amazon.com/cli/latest/reference/s3api/create-bucket.html#options)에서는 `--create-bucket-configuration` 의 **LocationConstraint** 를 아래와 같이 설명하고 있다.

  + > Specifies the Region where the bucket will be created. You might choose a Region to optimize latency, minimize costs, or address regulatory requirements. For example, if you reside in Europe, you will probably find it advantageous to create buckets in the Europe (Ireland) Region. For more information, see Accessing a bucket in the Amazon S3 User Guide .

    - > If you don't specify a Region, the bucket is created in the US East (N. Virginia) Region (us-east-1) by default.

#### Public Access Block
- S3 CLI 로 Bucket 을 만들게 되면, 기본적으로 `Public Access Block` 은 활성화 되어있다.(Public access 불가)
- 따라서 Public Access Block 을 비활성화 하고 싶다면 [PutPublicAccessBlock](https://docs.aws.amazon.com/cli/latest/reference/s3api/put-public-access-block.html?highlight=put%20public%20access%20block#put-public-access-block) 이나 [DeletePublicAccessBlock](https://docs.aws.amazon.com/cli/latest/reference/s3api/delete-public-access-block.html?highlight=deletepublicaccessblock) 를 통해 할 수 있다.

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

<br /><br /><br /><br /><br />

--- 
- Refs:
  + [AWS CLI Refs: caete-bucket](https://docs.aws.amazon.com/cli/latest/reference/s3api/create-bucket.html)


