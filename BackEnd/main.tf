resource "aws_dynamodb_table" "visitor_count" {
    billing_mode   = "PAY_PER_REQUEST"
    hash_key       = "ID"
    name           = "cloud-resume-challenge"
    read_capacity  = 0
    stream_enabled = false
    tags           = {}
    tags_all       = {}
    write_capacity = 0

    attribute {
        name = "ID"
        type = "S"
    }

    point_in_time_recovery {
        enabled = false
    }

    timeouts {}

}

resource "aws_dynamodb_table_item" "table_item" {
  table_name = aws_dynamodb_table.visitor_count.name
  hash_key   = aws_dynamodb_table.visitor_count.hash_key

  lifecycle {
    ignore_changes = all
  }

  item = <<ITEM
{
  "ID": {"S": "Visitors"},
  "num":{"N":"0"}
}
ITEM
}


resource "aws_lambda_function" "db_count" {
    filename = "get_db_count.zip"
    function_name = "get_db_count"
    role          = "arn:aws:iam::929959996097:role/allow_dynamodb"
    handler = "lambda_function.lambda_handler"
    runtime = "python3.9"
}