resource "aws_lambda_function" "db_count" {
    filename = "get_db_count.zip"
    function_name = "get_db_count"
    role          = "arn:aws:iam::929959996097:role/lambda-apigateway-role"
    handler = "lambda_function.lambda_handler"
    runtime = "python3.9"
}

