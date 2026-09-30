package com.hamsiny.portfolio.service;

import com.hamsiny.portfolio.dto.ContactRequest;
import com.hamsiny.portfolio.dto.ContactResponse;
import com.hamsiny.portfolio.entity.ContactMessage;
import com.hamsiny.portfolio.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {

    private final ContactMessageRepository repository;

    public ContactService(ContactMessageRepository repository) {
        this.repository = repository;
    }

    /** Saves the message to MySQL. No email is sent (no mail service is configured). */
    @Transactional
    public ContactResponse save(ContactRequest request) {
        ContactMessage entity = new ContactMessage();
        entity.setName(request.name().trim());
        entity.setEmail(request.email().trim().toLowerCase());
        entity.setMessage(request.message().trim());
        ContactMessage saved = repository.save(entity);
        return new ContactResponse(true, "Message saved. Thank you for reaching out.", saved.getId());
    }
}
