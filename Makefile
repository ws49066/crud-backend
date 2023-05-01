deploy-test:
	docker build -t crud-backend:test .
	docker-compose -f composes/crud-backend-test/docker-compose.yaml up -d