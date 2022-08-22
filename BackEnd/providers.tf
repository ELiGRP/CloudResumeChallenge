terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
  cloud {
    organization = "elijahdouglas"
    workspaces {
      name = "CloudResumeChallenge"
    }
  }
}


provider "aws" {
  region                  = "us-east-1"
}

